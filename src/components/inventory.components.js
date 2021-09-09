import React from 'react'

import {
    Row,
    Col,
    Container
} from 'reactstrap';

const Inventory = ({type, inventory, setInventory, level, gold, setGold, potions, setPotions}) => {
    let armor1 = {};
    let armor2 = {};
    let armor3 = {};
    let attack1 = {};
    let attack2 = {};
    let attack3 = {};
    
    if(type.includes("Cleric")){
        armor1.SRC = "/images/inventory/wizardArmor1.jpg";
        armor2.SRC = "/images/inventory/wizardArmor2.jpeg";
        armor3.SRC = "/images/inventory/wizardArmor3.jpeg";
        attack1.SRC = "/images/inventory/mace1.png";
        attack2.SRC = "/images/inventory/mace2.jpeg";
        attack3.SRC= "/images/inventory/mace3.jpeg";
    } else if (type.includes("Fighter")){
        armor1.SRC = "/images/inventory/fighterArmor1.png";
        armor2.SRC = "/images/inventory/fighterArmor2.jpeg";
        armor3.SRC = "/images/inventory/fighterArmor3.png";
        attack1.SRC = "/images/inventory/sword1.jpeg";
        attack2.SRC = "/images/inventory/sword2.jpg";
        attack3.SRC = "/images/inventory/sword3.jpg";
    } else if (type.includes("Wizard")){
        armor1.SRC = "/images/inventory/wizardArmor1.jpg";
        armor2.SRC = "/images/inventory/wizardArmor2.jpeg";
        armor3.SRC = "/images/inventory/wizardArmor3.jpeg";
        attack1.SRC = "/images/inventory/wand1.jpg";
        attack2.SRC = "/images/inventory/wand2.jpg";
        attack3.SRC = "/images/inventory/wand3.png";
    } else if (type.includes("Rogue")){
        armor1.SRC = "/images/inventory/fighterArmor1.png";
        armor2.SRC = "/images/inventory/fighterArmor2.jpeg";
        armor3.SRC = "/images/inventory/fighterArmor3.png";
        attack1.SRC = "/images/inventory/dagger1.png";
        attack2.SRC = "/images/inventory/dagger2.jpg";
        attack3.SRC = "/images/inventory/dagger3.jpeg";
    }
    
    for(let i=0; i<inventory.length; i++){
        if(inventory[i]==="armor1"){
            armor1.class="owned";
            armor1.owned = true;
        } else if (inventory[i]==="armor2") {
            armor2.class="owned";
            armor2.owned = true;
        } else if (inventory[i]==="armor3") {
            armor3.class="owned";
            armor3.owned = true;
        } else if (inventory[i]==="attack1") {
            attack1.class="owned";
            attack1.owned = true;
        } else if (inventory[i]==="attack2") {
            attack2.class="owned";
            attack2.owned = true;
        } else if(inventory[i]==="attack3") {
            attack3.class="owned";
            attack3.owned = true;
        }
    }

    const buyItem = (owned, cost, item) => {
        if(!owned){
            if(gold >= cost){
                let newInventory = inventory;
                newInventory.push(item);
                setInventory(newInventory)
                setGold(gold-cost)
            } else {
                alert("You do not have enough gold.")
            }
        }
    }

    const buyPotion = () => {
        if(gold >= level*50){
            setPotions(potions + 1)
            let newInventory = inventory;
            newInventory.push("potion")
            setInventory(newInventory)
            setGold(gold - (level*50))
        } else {
            alert("You do not have enough gold.")
        }
    }

    return (
        <Container id="shop">
            <Row>
                <Col className={armor1.class}>
                    <img className="icon" src={armor1.SRC} alt="Armor 1" onClick={e=>buyItem(armor1.owned, 200, "armor1")} />
                    <p className="text-center"> 200 gold</p>
                </Col>
                <Col className={attack1.class}>
                    <img className="icon" src={attack1.SRC} alt="Weapon 1" onClick={e=>buyItem(attack1.owned, 200, "attack1")} />
                    <p className="text-center"> 200 gold</p>
                </Col>
            </Row>
            <Row>
                <Col className={armor2.class}>
                    <img className="icon" src={armor2.SRC} alt="Armor 2" onClick={e=>buyItem(armor2.owned, 700, "armor2")} />
                    <p className="text-center"> 700 gold</p>
                </Col>
                <Col className={attack2.class}>
                    <img className="icon" src={attack2.SRC} alt="Weapon 2" onClick={e=>buyItem(attack2.owned, 700, "attack2")} />
                    <p className="text-center"> 700 gold</p>
                </Col>
            </Row>
            <Row>
                <Col className={armor3.class}>
                    <img className="icon" src={armor3.SRC} alt="Armor 3" onClick={e=>buyItem(armor3.owned, 12000, "armor3")} />
                    <p className="text-center"> 12000 gold</p>
                </Col>
                <Col className={attack3.class}>
                    <img className="icon" src={attack3.SRC} alt="Armor 3" onClick={e=>buyItem(attack3.owned, 12000, "attack3")} />
                    <p className="text-center"> 12000 gold</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img className="icon" src="/images/inventory/potion.png" alt="potion" onClick={e=>buyPotion()} />
                    <p className="text-center"> {level*50}</p>
                </Col>
                <Col>
                    <p className="text-center">Current Number of Potions</p>
                    <p className="text-center">{potions}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Inventory
