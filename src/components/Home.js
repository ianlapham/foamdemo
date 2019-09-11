import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import Geohash from "latlon-geohash"
import { TextLayer } from "deck.gl"
import { StaticMap } from "react-map-gl"
import { Launcher } from "react-chat-window"
import DeckGL from "@deck.gl/react"
import { func } from "prop-types"
const Box = require("3box")

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 600px;
`

const MapBox = styled.div`
  width: 100%;
  height: 100%;
`

export default function Home(props) {
  // const [input, setInput] = useState("")

  const [posts, setPosts] = useState([])

  const [chatOpen, setChatOpen] = useState(false)

  const [box, setBox] = useState()

  const [spaceName] = useState("foamSpaceForDemo")
  const [space, setSpace] = useState()

  const [threadName, setThreadName] = useState("Foam General ")
  const [thread, setThread] = useState()

  useEffect(() => {
    async function getBox() {
      let box = await Box.openBox(props.account, window.ethereum)
      setBox(box)
    }
    getBox()
  }, [props.account])

  useEffect(() => {
    async function getSpace() {
      if (box) {
        let space = await box.openSpace(spaceName)
        setSpace(space)
      }
    }
    getSpace()
  }, [box, spaceName])

  useEffect(() => {
    clearTimeout(t)
    async function getThread() {
      if (space) {
        let newThread = await space.joinThread(threadName + spaceName, {
          firstModerator:
            "did:3:bafyreicllmr3u7yekpvpandm7leizuxmorwgfylhhd3qp3yhctz5hsmvca",
          members: false
        })
        setThread(newThread)
        setChatOpen(true)
      }
    }
    getThread()
  }, [space, spaceName, thread, threadName]) // eslint-disable-line react-hooks/exhaustive-deps

  const [t, setT] = useState()

  async function fetchPosts() {
    if (thread && space) {
      const newPosts = await Box.getThread(
        spaceName,
        threadName + spaceName,
        "did:3:bafyreicllmr3u7yekpvpandm7leizuxmorwgfylhhd3qp3yhctz5hsmvca",
        false
      )
      setPosts(newPosts)
    }
    setT(setTimeout(fetchPosts, 1000))
  }

  useEffect(() => {
    fetchPosts()
  }, [thread]) // eslint-disable-line react-hooks/exhaustive-deps

  function getMessages() {
    return Object.keys(posts).map((key, i) => {
      let auth = "them"
      if (posts[key].author === space.DID) {
        auth = "me"
      }
      return {
        author: auth,
        type: "text",
        data: { text: posts[key].message }
      }
    })
  }

  async function addPost(message) {
    if (thread) {
      await thread.post(message.data.text)
      fetchPosts()
    }
  }

  // Map
  const BOUNDING_BOX = [[-73.94, 40.674], [-74.051, 40.73]]
  const INITIAL_ZOOM = 15
  const TEXT_COLOR = [29, 145, 192]
  const TEXT_SIZE = 22

  // Functions
  function getCenterPoint(bounding_box) {
    return [
      (bounding_box[0][0] + bounding_box[1][0]) / 2,
      (bounding_box[0][1] + bounding_box[1][1]) / 2
    ]
  }

  function getPointCoords(geohash) {
    let coords = Geohash.decode(geohash)
    return [coords["lon"], coords["lat"], 0]
  }

  const [data, setData] = useState([])

  const [statelayers, setStateLayers] = useState([])

  function handleClick(info, event) {
    let name = info.object.name
    setThreadName(name)
  }

  function renderLayer() {
    const textLayer = new TextLayer({
      id: "text-layer",
      data,
      getColor: d => TEXT_COLOR,
      getPosition: d => d.coords,
      getText: d => "x " + d.name,
      getSize: TEXT_SIZE,
      getAngle: 0,
      onClick: handleClick,
      pickable: true,
      getTextAnchor: "start",
      getAlignmentBaseline: "top",
      getPixelOffset: [-TEXT_SIZE / 4, -TEXT_SIZE / 4]
    })
    console.log("setting layers")
    setStateLayers([textLayer])
  }

  useEffect(() => {
    fetchPoints(100, 0)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  function fetchPoints(limit, offset) {
    fetch(
      "https://map-api-direct.foam.space/poi/filtered?swLng=" +
        BOUNDING_BOX[0][0] +
        "&swLat=" +
        BOUNDING_BOX[0][1] +
        "&neLng=" +
        BOUNDING_BOX[1][0] +
        "&neLat=" +
        BOUNDING_BOX[1][1] +
        "&status=application&status=listing&sort=most_value&limit=" +
        limit +
        "&offset=" +
        offset
    )
      .then(result => result.json())
      .then(json => {
        // console.log(json)
        let newData = data
        json.forEach(function(record) {
          record.tags.forEach(function(tag) {
            if (tag === "Food") {
              newData.push({
                name: record.name,
                tag,
                coords: getPointCoords(record.geohash)
              })
            }
          })
        })
        setData(newData)

        offset += json.length
        if (json.length === limit) {
          fetchPoints(limit, offset)
        } else {
          // console.log(data)
          renderLayer()
        }
      })
  }

  const initialViewState = {
    longitude: getCenterPoint(BOUNDING_BOX)[0],
    latitude: getCenterPoint(BOUNDING_BOX)[1],
    zoom: INITIAL_ZOOM,
    pitch: 0,
    bearing: 0
  }

  // function setData() {
  //   data = []
  // }

  return (
    <Container>
      <MapBox>
        <DeckGL
          layers={statelayers}
          controller={true}
          initialViewState={initialViewState}
        >
          {/* {setData()} */}
          <StaticMap
            mapboxApiAccessToken={
              "pk.eyJ1IjoiaWFubGFwaGFtIiwiYSI6ImNrMGI5ajB1YTBzMGkzbnE4b2xscW01ZmQifQ.uTLKJ-M_-GXcYgIIucCphw"
            }
          />
        </DeckGL>
      </MapBox>
      <Launcher
        isOpen={chatOpen}
        handleClick={e => {
          setChatOpen(!chatOpen)
        }}
        agentProfile={{
          teamName: threadName + " Thread",
          imageUrl:
            "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png"
        }}
        onMessageWasSent={addPost}
        messageList={getMessages()}
        showEmoji={false}
      />
    </Container>
  )
}
