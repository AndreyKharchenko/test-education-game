import React, { DragEvent, useEffect, useState } from 'react'
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Title from '../components/Title';


const GamePage = styled.div`
  background-image: url(static/background1.jpg);
  height: 98vh;
`

const CoinsContainers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index:-1
`

const CoinText = styled.span`
  font-family: Calibri;
  font-size: 56px;
  font-weight: 400;
  line-height: 68px;
  letter-spacing: 2px;
  text-align: left;
  color: #FFF;
  text-shadow: 2px 0 2px #000, 
                0 2px 2px #000, 
                -2px 0 2px #000, 
                0 -2px 2px #000;
`

const Coin = styled.div`
  height: 131px;
  width: 131px;
  border-radius: 50%;
  background-color: #FFD748;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  cursor: grab;
  z-index: 999;
`

interface coinType {
  id: number,
  order: number,
  text: string
}

const alphabet = ['А', 'Б', 'В', 'Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'];

const Game = () => {
    useEffect(() => {
      const count = Number(router.query.count);
      const value = router.query.value != 'А' ? Number(router.query.value) : router.query.value;
      const arrayCoin = [];
      
        for(let i = 0; i < count; i++) {
          if(value != 'А'){
            let order = Math.floor(Math.random() * value);
            let obj = {id: i, order: Number(order), text:  String(order)};
            arrayCoin.push(obj);
          } else {
            let order = Math.floor(Math.random() * 33);
            let obj = {id: i, order: Number(order), text:  String(alphabet[Number(order)])};
            arrayCoin.push(obj);
          }
          
        }

      setCoinList(arrayCoin);
      
      
    }, [])

    const [coinList, setCoinList] = useState<coinType[] | []>([])
    const [currentCoin, setCurrentCoin] = useState<coinType | null>(null);
    const router = useRouter();

    useEffect(() => {
      let isRaise = checkOnRaise(coinList);
      
      if(isRaise != -1 && (router.query.upDown == 'up' && isRaise) || (router.query.upDown == 'down' && !(!!isRaise))) {
        router.push('/result');
      } 

    }, [coinList])
    
    

    const dragStart = (e: DragEvent, coin: any) => {
      setCurrentCoin(coin);
    }

    const dragEnd = (e: DragEvent) => {}
    const dragOver = (e: DragEvent) => {e.preventDefault()}

    const drop = (e: DragEvent, coin: any) => {
      e.preventDefault();
      setCoinList(coinList.map(c => {
          if(c.id === coin.id) {
            return {...c, order: currentCoin.order}
          }

          if(c.id === currentCoin.id) {
            return {...c, order: coin.order}
          }

          return c;
      }))
      
    }

    const sortCoins = (a:coinType,b: coinType) => {
      if(router.query.upDown == 'up') {
        if(a.order < b.order) {
          return 1;
        } else {
          return -1;
        }
      } else {
        if(a.order > b.order) {
          return 1;
        } else {
          return -1;
        }
      }
      
    }

    const checkOnRaise = (coins: coinType[]) => {
      
        let isRaise: number | boolean = -1;
        
        for(let i = 0; i < coins.length - 1; i++) {
          if(router.query.value != 'А') {
            if(Number(coins[i].text) < Number(coins[i+1].text) ) {
              isRaise = true;
            } else {
              isRaise = false;
            }
          } else {
            if(coins[i].text < coins[i+1].text ) {
              isRaise = true;
            } else {
              isRaise = false;
            }
          }
          
        }

        return isRaise;
    }

    
  
    return (
      <GamePage>
        <Title title={router.query.upDown == 'down' ? 'По убыванию' : 'По возрастанию'} titleType='upDown' />
        <CoinsContainers>
          {coinList.sort(sortCoins).map(coin => {
            return(
              <Coin 
                key={coin.id}
                onDragStart={(e) => dragStart(e, coin)}
                onDragLeave={(e) => dragEnd(e)}
                onDragEnd={(e) => dragEnd(e)}
                onDragOver={(e) => dragOver(e)}
                onDrop={(e) => drop(e, coin)}
                draggable={true}
              >
                <CoinText>{coin.text}</CoinText>
              </Coin>
            )
          })
          }
        </CoinsContainers>
      </GamePage>
    );
  
}

export default Game;