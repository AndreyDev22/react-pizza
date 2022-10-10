import React, {useState, useEffect} from 'react';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';

const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState({
        name: 'популярности',
        sortProperty: 'rating'
    });

    useEffect(() => {
        setIsLoading(true);

        const sortBy = sortType.sortProperty.replace('-', '');
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? `category=${categoryId}` : '';

        fetch(
            `https://6342ab413f83935a78470e34.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
        )
            .then(res => res.json())
            .then((arr) => {
            setItems(arr);
            setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId, sortType])

    return (
        <>
            <div className='container'>
                <div className="content__top">
                    <Categories value={categoryId} onClickCategory={(index) => setCategoryId(index)}/>
                    <Sort value={sortType} onClickSortType={(i) => setSortType(i)}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {
                    isLoading
                        ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                        : items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza}/>)
                    }
                </div>
            </div>
        </>
    )
}

export default Home
