import React from 'react'
import CardItem from './CardItem'

const CharacterTable = ({hero, isLoading}) => {
    return isLoading ? <h1>Loading</h1> :
    <section className="contents">
        {
            hero.map(item=>(
                <CardItem key={item.id} item={item}></CardItem>
            ))
        }
    </section>
}

export default CharacterTable