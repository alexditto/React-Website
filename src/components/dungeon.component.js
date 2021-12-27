import React from 'react'
import { useState, useEffect} from 'react'

import fighterMale from '../imgs/fighter-male.jpg';
import wizardMale from '../imgs/wizard-male.jpg';
import rogueMale from '../imgs/rogue-male.jpg';
import clericMale from '../imgs/cleric-male.png';
import fighterFemale from '../imgs/fighter-female.png';
import wizardFemale from '../imgs/wizard-female.jpg';
import rogueFemale from '../imgs/rogue-female.jpg';
import clericFemale from '../imgs/cleric-female.png';
import fightIcon from '../imgs/fight-icon.png';
import healIcon from '../imgs/heal-icon.png';
import runIcon from '../imgs/run-icon.png';
import tentIcon from '../imgs/tent.png';
import doorIcon from '../imgs/door.png';
import graveyard from '../imgs/graveyard.jpg'

import FinalVictory from './finalVictory.component';
import Inventory from './inventory.components';

import {
    Row,
    Col,
    Container
} from 'reactstrap';

const Dungeon = () => {

    //State
    const [hp, setHp] = useState(0)
    const [attack, setAttack] = useState(0);
    const [level, setLevel] = useState(0);
    const [armor, setArmor] = useState(0);
    const [xp, setXp] = useState(0);
    const [gold, setGold] = useState(0);
    const [alive, setAlive] = useState(true);
    const [character, setCharacter] = useState("");
    const [type, setType] = useState(0);
    const [imageSRC, setImageSRC] = useState("")
    const [playerHit, setPlayerHit] = useState("")
    const [multiplier, setMultiplier] = useState(1)
    const [victory, setVictory] = useState(false)
    const [inventory, setInventory] = useState([])
    const [attackMod, setAttackMod] = useState(0)
    const [armorMod, setArmorMod] = useState(0)
    const [potions, setPotions] = useState(0)
    const [resting, setResting] = useState(false)

    const [monster, setMonster] = useState({})
    const [monsterName, setMonsterName] = useState("Monster Name")
    const [monsterHp, setMonsterHp] = useState(0)
    const [monsterAttack, setMonsterAttack] = useState(0)
    const [monsterArmor, setMonsterArmor] = useState(0)
    const [monsterDamage, setMonsterDamage] = useState(0)
    const [monsterImg, setMonsterImg] = useState("")
    const [monsterHit, setMonsterHit] = useState("")
    const [cr, setCr] = useState(0)
    const [monsterAlive, setMonsterAlive] = useState(true)
    const [victoryMessage, setVictoryMessage] = useState("")

    //Initialize
    useEffect(()=>{
        fectchCharacter()
    }, []);

    useEffect(()=>{
        setPicture()
    });

    useEffect(() => {
        newMonster()
    }, [])

    const setCharacterImg = (type) => {
        return type === "Fighter Male" ? fighterMale :
        type === "Wizard Male" ? wizardMale :
        type === "Rogue Male" ? rogueMale :
        type === "Cleric Male" ? clericMale :
        type === "Fighter Female" ? fighterFemale :
        type === "Wizard Female" ? wizardFemale :
        type === "Rogue Female" ? rogueFemale : 
        type === "Cleric Female" ? clericFemale
        : ""
    }

    const fectchCharacter = ()=>{
        let myHeaders = new Headers();
        let jwt = window.localStorage.getItem('jwt')
        let characterId = window.localStorage.getItem('character')
        myHeaders.append("Authorization", jwt);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          
          fetch(`/api/characters/${characterId}`, requestOptions)
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
                setType(res.type);
                setImageSRC(setCharacterImg(type));
                setVictory(res.victory);
                setInventory(res.inventory);
                stockInventory(res.inventory)
            })
            .catch(error => console.log('error', error));
    }
    
    const stockInventory = (inventoryArr) => {
        let potionCount = 0;
        let attackModCount = 0;
        let armorModCount = 0;
        for(let i = 0; i < inventoryArr.length; i++){
            if(inventoryArr[i] === "armor1"){
                armorModCount += 3
            } else if (inventoryArr[i] === "armor2"){
                armorModCount += 4
            } else if (inventoryArr[i] === "armor3"){
                armorModCount += 5
            } else if (inventoryArr[i] === "attack1"){
                attackModCount += 3
            } else if (inventoryArr[i] === "attack2"){
                attackModCount += 4
            } else if (inventoryArr[i] === "attack3"){
                attackModCount += 5
            } else if (inventoryArr[i] === "potion"){
                potionCount += 1
            }
        }
        setPotions(potionCount)
        setAttackMod(attackModCount)
        setArmorMod(armorModCount)
    }

    const setPicture = ()=> {
        setImageSRC(setCharacterImg(type))
    }

    const saveCharacter = (currentHp = hp, victory = false) => {
        let myHeaders = new Headers();
        let jwt = window.localStorage.getItem('jwt')
        let characterId = window.localStorage.getItem('character')
        myHeaders.append("Authorization", jwt);
        myHeaders.append("Content-Type", "application/json");

        let data = {
            character : victory ? character + ", Dragon Slayer" : character,
            hp : currentHp,
            type : type,
            attack : attack,
            armor : armor,
            level : level,
            xp : xp,
            gold : gold,
            alive : currentHp <=0 ? false : true,
            victory : victory,
            inventory : inventory
        }

        let requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body : JSON.stringify(data),
            redirect: 'follow'
          };

          fetch(`/api/characters/${characterId}`, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }

    //Monsters
    let monsters= [
        { name:"Goblin", ac: 12, health: 11, attackBonus: 1, attackDie: 4, damageMod: 1, image: "images/monsterImg/goblin.jpg", cr: 1},
        { name:"Zombie", ac: 12, health: 12, attackBonus: 1, attackDie: 4, damageMod: 1, image: "images/monsterImg/zombie.jpg", cr: 2},
        { name:"Kobold", ac: 14, health: 10, attackBonus: 2, attackDie: 6, damageMod: 2, image: "images/monsterImg/kobold.jpg", cr:2},
        { name:"Plotted Plant", ac: 1, health: 20, attackBonus: 0, attackDie: 0, damageMod: 0, image: "images/monsterImg/plottedplant.jpg", cr:1},
        { name:"Reaper", ac: 20, health: 200, attackBonus: 8, attackDie: 8, damageMod: 5, image: "images/monsterImg/reaper.jpg", cr:20},
      ];
    let monsterManualMonsters = [
        {name: "Ape", ac: 12, health: 19, attackBonus: 5, attackDie: 6, damageMod: 3, image: "images/monsterImg/ape.jpg", cr: 2},
        {name: "Axe Beak", ac: 11, health: 19, attackBonus: 4, attackDie: 8, damageMod: 2, image: "images/monsterImg/axebeak.jpg", cr: 2},
        {name: "Death Dog", ac: 12, health: 39, attackBonus: 4, attackDie: 6, damageMod: 2, image: "images/monsterImg/deathdog.jpg", cr: 4},
        {name: "Giant Fire Bettle", ac: 13, health: 4, attackBonus: 1, attackDie: 6, damageMod: -1, image: "images/monsterImg/giantfirebettle.jpg", cr: 0},
        {name: "Giant Spider", ac: 14, health: 26, attackBonus: 5, attackDie: 8, damageMod: 3, image: "images/monsterImg/giantspider.jpg", cr: 4},
        {name: "Phase Spider", ac: 13, health: 32, attackBonus: 4, attackDie: 10, damageMod: 2, image: "images/monsterImg/phasespider.jpg", cr: 5},
        {name: "Winter Wolf", ac: 13, health: 75, attackBonus: 6, attackDie: 12, damageMod: 4, image: "images/monsterImg/winterwolf.jpg", cr: 7},
        {name: "Aboleth", ac: 17, health: 135, attackBonus: 9, attackDie: 12, damageMod: 5, image: "images/monsterImg/aboleth.jpg", cr: 15},
        {name: "Deva", ac: 17, health: 136, attackBonus: 8, attackDie: 30, damageMod: 4, image: "images/monsterImg/deva.jpg", cr: 19},
        {name: "Fire Giant", ac: 18, health: 170, attackBonus: 11, attackDie: 36, damageMod: 7, image: "images/monsterImg/firegiant.jpg", cr: 19},
        {name: "Bone Devil", ac: 19, health: 150, attackBonus: 8, attackDie: 16, damageMod: 4, image: "images/monsterImg/bonedevil.jpg", cr: 18},
        {name: "cloaker", ac: 14, health: 78, attackBonus: 6, attackDie: 24, damageMod: 3, image: "images/monsterImg/cloaker.jpg", cr: 18},
        {name: "Oni", ac: 16, health: 110, attackBonus: 7, attackDie: 20, damageMod: 4, image: "images/monsterImg/oni.jpg", cr: 17},
        {name: "Chimera", ac: 14, health: 114, attackBonus: 7, attackDie: 12, damageMod: 4, image: "images/monsterImg/chimera.jpg", cr: 17},
        {name: "Vrock", ac: 15, health: 104, attackBonus: 6, attackDie: 20, damageMod: 3, image: "images/monsterImg/vrock.jpg", cr: 16},
        {name: "Medusa", ac: 15, health: 127, attackBonus: 5, attackDie: 8, damageMod: 2, image: "images/monsterImg/medusa.jpg", cr: 16},
        {name: "Invisible Stalker", ac: 22, health: 50, attackBonus: 6, attackDie: 12, damageMod: 3, image: "images/monsterImg/invisiblestalker.jpg", cr: 15},
        {name: "Troll", ac: 15, health: 84, attackBonus: 7, attackDie: 12, damageMod: 4, image: "images/monsterImg/troll.jpg", cr: 14},
        {name: "Night Hag", ac: 17, health: 112, attackBonus:7, attackDie: 16, damageMod: 4, image: "images/monsterImg/nighthag.jpg", cr: 14},
        {name: "Ettin", ac: 12, health: 85, attackBonus: 7, attackDie: 16, damageMod: 5, image: "images/monsterImg/ettin.jpg", cr: 13},
        {name: "Unicorn", ac: 12, health: 67, attackBonus: 7, attackDie: 12, damageMod: 4, image: "images/monsterImg/unicorn.jpg", cr: 12},
        {name: "Nightmare", ac: 13, health: 68, attackBonus: 6, attackDie: 16, damageMod: 4, image: "images/monsterImg/nightmare.jpg", cr: 12},
        {name: "Mimic", ac: 12, health: 58, attackBonus: 5, attackDie: 8, damageMod: 3, image: "images/monsterImg/mimic.jpg", cr: 10},
      ];
      
      let ancientRedDragon = {name: "Ancient Red Dragon", ac: 25, health: 250, attackBonus: 10, attackDie: 20, damageMod: 9, image: "images/monsterImg/dragon.jpg", cr: 30}
      
      
      monsters.push(...monsterManualMonsters);
      
      //get monster
      const newMonster = () => {
          if(monster !== undefined){
            let filteredMonsters = monsters.filter(monsters => monsters.cr <= level && monsters.cr >= (level -5));
            let random = level !== 20 ? filteredMonsters[Math.floor(Math.random()*filteredMonsters.length)] : ancientRedDragon;
            console.log(random)
            setMonster(random)
            setMonsterName(random.name)
            setMonsterHp(random.health)
            setMonsterAttack(random.attackBonus)
            setMonsterImg(random.image)
            setMonsterArmor(random.ac)
            setMonsterDamage(random.attackDie)
            setCr(random.cr)
            setMonsterAlive(true)
          } 
      }

      const attackRound = () => {
        playerAttackRound()
        monsterAttackRound()
      }

      const heal = () => {
          console.log(inventory)
          let index = inventory? inventory.indexOf("potion") : -1
          if(index > -1){
              inventory.splice(index, 1)
              let healing = Math.floor(Math.random() * (10 * level))
              setPotions(potions-1)
              if(healing + hp >= 10+(level)*5){
                  setHp(10+(5*level))
                  setVictoryMessage(`You were healed back to Max HP.`)
              } else {
                  setHp(hp + healing)
              }
          } else {
              alert("You do not have any potions. Buy some on next Rest.")
          }
          saveCharacter()
      }

      const run = () => {
          let randomNum = Math.floor(Math.random() *10);
          if(randomNum <=8){
            newMonster()
            let lostGold = (Math.floor(gold * ((Math.floor(Math.random() *20))/100)))
            setGold(gold - lostGold)
            setVictoryMessage(`You lost ${lostGold} gold running away from ${monsterName}.`)
            saveCharacter()
          } else {
              alert("You couldn't get away!")
              monsterAttackRound()
          }
      }

      const rest = () => {
          if(monsterHp <= 0){
            setMultiplier(1)
            setHp(10 + (level*5))
            setVictoryMessage("")
            saveCharacter(10+(5*level))
            setResting(true)
          } else {
            alert(`${monsterName} won't let you rest!`)
          }
      }

      const kickDownTheDoor = () => {
          if(monsterHp <= 0){
            setMultiplier(Math.floor(multiplier + 1))
            newMonster()
            setVictoryMessage("")
            setResting(false)
            stockInventory(inventory)
          } else {
              alert(`${monsterName} blocks the door!`)
          }
      }

      const resurrect = () => {
          if(gold >= 100 * level){
            setAlive(true)
            setCharacter(character.replace(", the Late", ""))
            setMultiplier(1)
            setGold(Math.floor(gold - (100 * level)))
            setHp(10 + (5*level))
            saveCharacter(10 + (level*5))
          } else {
            alert("You do not have enough gold.")
          }
      }
      
      const playerAttackRound = () => {
        let attackRole = Math.floor(Math.random()*20) + attack + attackMod;
        setVictoryMessage("")
        if(attackRole >= monsterArmor){
            let damageRole = Math.floor(Math.random() * (level * 2)+ (Math.random() * attackMod))+1
            console.log(damageRole)
            setPlayerHit(`You hit for ${damageRole} damage.`)
            setMonsterHp(monsterHp - damageRole)
            deadMonster(damageRole)
            monsterHp - damageRole <= 0 ? setMonsterHp(0) : setMonsterHp(monsterHp - damageRole)
        } else {
            setPlayerHit("Miss")
        }
      }

      const deadMonster = (damageRole) => {
        if(monsterHp - damageRole <= 0){
            if(monsterName === "Ancient Red Dragon") {
                setVictory(true)
                saveCharacter(10+(level*5), true)
            }
            setMonsterImg("images/monsterImg/tombstone.png")
            !monsterName.includes('Dead') ? setMonsterName(`Dead ${monsterName}`) : setMonsterName("Still Dead")
            setMonsterAttack(0)
            setMonsterDamage(0)
            setMonsterArmor(0)
            if(monsterAlive){
                let addedXp = ((Math.floor(Math.random() * cr)) + Math.floor(Math.random() * 10) * multiplier)
                let addedGold= ((Math.floor(Math.random() * cr)) + Math.floor(Math.random() * 100) * multiplier)
                setXp(xp + addedXp)
                setGold(gold + addedGold)
                setMonsterAlive(false)
                setVictoryMessage(`You killed ${monsterName} and received ${addedGold} gold and ${addedXp} experience because of your x${multiplier} multiplier.`)
                levelUp()
            }
        }
      }

      const levelUp = () => {
        if(xp >= (3**level)){
            setLevel(level + 1)
        }
    }


      const monsterAttackRound = () => {
        let attackRole = Math.floor(Math.random()*20) + monsterAttack
        if(attackRole >= armor + 10  + armorMod && !monsterName.includes("Dead")){
            let damageRole = Math.floor(Math.random()* monsterDamage)
            setMonsterHit(`${monsterName} hit you for ${damageRole} damage.`)
            setHp(hp - damageRole)
            saveCharacter(hp-damageRole)
            deadPlayer(damageRole)
        } else if(attackRole >= armor + 10  + armorMod){
            setMonsterHit(`${monsterName} misses you.`)
        } else {
            monsterName.includes("Dead") ? setMonsterHit(`${monsterName} can't hurt you any more. It's dead.`): setMonsterHit(`${monsterName} misses you.`)
        }
      }

      const deadPlayer = (damageRole) => {
          if(hp - damageRole <= 0){
            setAlive(false)
            setCharacter(`${character}, the Late`)
            let currentHp = hp - damageRole
            saveCharacter(currentHp)
          }
      }


    if(victory){
       return (
           <FinalVictory />
       ) 
    } else if(resting) {
        return (
            <Container>
                <br />
                <Row>
                    <Col id="heroPanel">
                        <div>{monsterHit}</div>
                        <h3>{character}</h3>
                        <img src = {imageSRC} class="img-thumbnail" alt= {type} />
                        <p>Hp: {hp}</p>
                        <div>{`Gold Multiplier: ${multiplier}`}</div>
                        <p>Level: {level}</p>
                        <p>XP: {xp}</p>
                        <p>Attack: {attack + attackMod}</p>
                        <p>Armor: {armor + armorMod}</p>
                        <p>Gold: {gold}</p>
                        <p>Potions: {potions}</p>
                    </Col>
                    <Col id="actionPanel">
                        <Container>
                            <Row className="mb-4">
                            </Row>
                            <Row>
                                <Col>
                                </Col>
                                <Col>
                                    <img src = {doorIcon} alt= "New Monster" className="icon" onClick={e=>kickDownTheDoor()} />
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col>
                                    <h5>{victoryMessage}</h5>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <Inventory type={type} 
                        inventory={inventory} setInventory={setInventory}
                        level={level} 
                        gold={gold} setGold={setGold}
                        potions={potions} setPotions={setPotions} />
                    </Col>
                </Row>
                <br />
                <br />
                <br />
            </Container>
        )
    }else if (alive && level !== 20){
        return (
            <Container>
                <br />
                <Row>
                    <Col id="heroPanel" className="col-4">
                        <div>{monsterHit}</div>
                        <h3>{character}</h3>
                        <img src = {imageSRC} class="img-thumbnail" alt= {type} />
                        <p>Hp: {hp}</p>
                        <div>{`Gold Multiplier: ${multiplier}`}</div>
                        <p>Level: {level}</p>
                        <p>XP: {xp}</p>
                        <p>Attack: {attack + attackMod}</p>
                        <p>Armor: {armor + armorMod}</p>
                        <p>Gold: {gold}</p>
                        <p>Potions: {potions}</p>
                    </Col>
                    <Col id="actionPanel" className="col-4">
                        <Container>
                            <Row className="mb-4">
                                <Col>
                                    <img src = {fightIcon} alt= "Fight" className="icon" onClick={e=>attackRound()}/>
                                </Col>
                                <Col id="potions">
                                    <img src = {healIcon} alt= "Heal" className="icon" onClick={e=>heal()} title={potions}/>
                                </Col>
                                <Col>
                                    <img src = {runIcon} alt= "Run" className="icon" onClick={e=>run()}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img src = {tentIcon} alt= "Rest" className="icon" onClick={e=>rest()} />
                                </Col>
                                <Col>
                                    <img src = {doorIcon} alt= "New Monster" className="icon" onClick={e=>kickDownTheDoor()} />
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col>
                                    <h5>{victoryMessage}</h5>
                                </Col>
                            </Row>
                        </Container>
                    </Col> 
                    <Col id="monsterPanel" className="col-4">
                        <div>{playerHit}</div>
                        <h3>{monsterName}</h3>
                        <img src={monsterImg} alt={monsterName} />
                        <p>Hp: {monsterHp}</p>
                        <p>Defense: {monsterArmor}</p>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
            </Container>
        )
    } else if (!alive){
        return(
            <Container id="actionPanel">
                <Row>
                    <Col>
                        <h1>{`${character} has died.`}</h1>
                        <p>
                            {`Will you resurrect ${character}. It will cost ${100 * level} gold.`}
                            <img src={healIcon} alt="Resurrection?" className="icon" onClick={e=>resurrect()} style={{maxHeight: "4rem", maxWidth: "4rem", marginLeft: '2rem'}}/>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src = {graveyard} alt={`${character} has died.`} />
                    </Col>
                </Row>
            </Container>
        )
    } else if (level === 20){
        return (
            <Container>
                <br />
                <Row>
                    <Col id="heroPanel">
                        <div>{monsterHit}</div>
                        <h3>{character}</h3>
                        <img src = {imageSRC} class="img-thumbnail" alt= {type} />
                        <p>Hp: {hp}</p>
                        <div>{`Gold Multiplier: ${multiplier}`}</div>
                        <p>Level: {level}</p>
                        <p>XP: {xp}</p>
                        <p>Attack: {attack + attackMod}</p>
                        <p>Armor: {armor  + armorMod}</p>
                        <p>Gold: {gold}</p>
                        <p>Potions: {potions}</p>
                    </Col>
                    <Col id="actionPanel">
                        <Container>
                            <Row className="mb-4">
                                <Col>
                                    <img src = {fightIcon} alt= "Fight" className="icon" onClick={e=>attackRound()}/>
                                </Col>
                                <Col>
                                    <img src = {healIcon} alt= "Heal" className="icon" onClick={e=>heal()}/>
                                </Col>
                                <Col>
                                    <img src = {doorIcon} alt= "Run" className="icon" onClick={e=>kickDownTheDoor()}/>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col>
                                    <h5>{victoryMessage}</h5>
                                </Col>
                            </Row>
                        </Container>
                    </Col> 
                    <Col id="monsterPanel">
                        <div>{playerHit}</div>
                        <h3>{monsterName}</h3>
                        <img src={monsterImg} alt={monsterName} />
                        <p>Hp: {monsterHp}</p>
                        <p>Defense: {monsterArmor}</p>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
            </Container>
        )
    }
}

export default Dungeon
