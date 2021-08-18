import React from 'react'
import { useState, useEffect} from 'react'

const Dungeon = () => {
    const [hp, setHp] = useState(0)
    const [attack, setAttack] = useState(0);
    const [level, setLevel] = useState(0);
    const [armor, setArmor] = useState(0);
    const [xp, setXp] = useState(0);
    const [gold, setGold] = useState(0);
    const [alive, setAlive] = useState(0);
    const [character, setCharacter] = useState(0);
    const [type, setType] = useState(0);

    useEffect(()=>{
        fectchCharacter()
    })

    const fectchCharacter = async ()=>{
        let myHeaders = new Headers();
        let jwt = window.localStorage.getItem('jwt')
        let characterId = window.localStorage.getItem('character')
        myHeaders.append("Authorization", jwt);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          
          fetch(`http://localhost:5000/characters/${characterId}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                let res = JSON.parse(result);
                setHp(res.hp);
                setAttack(res.attack);
                setLevel(res.level);
                setArmor(res.armor);
                setXp(res.xp);
                setGold(res.gold);
                setAlive(res.alive);
                setCharacter(res.character);
                setType(res.type)
            })
            .catch(error => console.log('error', error));
    }
    return (
        <div>
            <br></br>
            hp:{hp}    attack:{attack} armor:{armor} level:{level} xp:{xp} gold:{gold} alive:{alive} character Name: {character} type:{type}
        </div>
    )
}

export default Dungeon
