
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Footer from './components/Footer/Footer'
import NewsLetter from './components/NewsLetter/NewsLetter'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [coin, setCoin] = useState(0)
  const [activeBtn, setActiveBtn] = useState(true)
  const [selectedPlayers, setSelectedPlayers] = useState([])
  const [alreadyChooseBtn, setAlreadyChooseBtn] = useState(false)
  const [alreadyChooseBtnId, setAlreadyChooseBtnId] = useState([])


  const handleCoin = () => {
    setCoin(coin + 4000000)
    notify('success', 'Credit Added to Your Account')
  }

  const handleActiveBtn = (status) => {
    if(status === 'availableBtn')
      setActiveBtn(true)
    if(status === 'selectedBtn')
      setActiveBtn(false)
  }

  const handleChoosePlayer = (player) => {
    if(selectedPlayers.length >= 6){
      notify('warning', "You've Reached to Your Selection Limit")
    }
    else{
      if(selectedPlayers.find(p => p.playerId === player.playerId)){
        notify('error', 'Player Already Selected')
      }
      else{
        if(player.biddingPrice > coin){
          notify('error', 'Not Enough Coin to Buy This Player. Claim Some Credit')
        }
        else{
          setCoin(coin - player.biddingPrice)
          const newSelectedPlayers = [...selectedPlayers, player]
          notify('success', `Congrates!! ${player.name} Is Now In Your Squad`)
          setSelectedPlayers(newSelectedPlayers)
          setAlreadyChooseBtn(true)
          const newAlreadyChooseBtnId = [...alreadyChooseBtnId, player.playerId]
          setAlreadyChooseBtnId(newAlreadyChooseBtnId)
        }
      }
    }
  }

  const handleRemovePlayer = (player) => {
    setSelectedPlayers(selectedPlayers.filter(p => p.playerId !== player.playerId))
    setCoin(coin + player.biddingPrice)
    setAlreadyChooseBtnId(alreadyChooseBtnId.filter(id => id !==player.playerId))
    notify('warning', 'Player Removed')
  }

  const handleAddMorePlayer = () => {
    setActiveBtn(true)
  }

  const notify = (msgType, msg) => {
    toast(msg, {
      type: msgType,
      position: "top-center",
    });
  };



  return (
    <>
      <ToastContainer />
      <Header coin={coin}></Header>
      <Banner handleCoin={handleCoin}></Banner>
      <div className='max-w-[1320px] mx-auto mt-[88px] mb-[300px] relative'>
        <AvailablePlayers 
          handleActiveBtn={handleActiveBtn}
          activeBtn={activeBtn}
          selectedPlayers={selectedPlayers}
          handleChoosePlayer={handleChoosePlayer}
          alreadyChooseBtn={alreadyChooseBtn}
          alreadyChooseBtnId={alreadyChooseBtnId}
          handleRemovePlayer={handleRemovePlayer}
          handleAddMorePlayer={handleAddMorePlayer}
        ></AvailablePlayers>
      </div>
      
      <div className='relative'>
        <div className='w-[1320px] mx-auto p-6 bg-[rgba(255,255,255,0.15)] border-2 border-[#ffffff] rounded-3xl newsLetterPos'>
            <NewsLetter></NewsLetter>
          </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App


