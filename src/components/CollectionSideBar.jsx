import React, { useState, useEffect } from 'react';
import products from '../products';
import { createStyles, RangeSlider } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    label: {
      top: 0,
      height: 28,
      lineHeight: '28px',
      width: 34,
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 700,
      backgroundColor: 'transparent',
    },
  
    thumb: {
      backgroundColor: 'hsl(26, 100%, 55%)',
      height: 28,
      width: 50,
      border: 'none',
    },
  
    dragging: {
      transform: 'translate(-50%, -50%)',
    },
}));

const CollectionSideBar = ({ filteredBrands, setFilteredBrands, sneakers, setSneakers, category }) => {

    const brandsInit = products.filter(item => item.category === category || item.category === 'Unisex').map(item => item.brand)
    const brands = [...new Set(brandsInit)]
    const [min, setMin] = useState(40)
    const [max, setMax] = useState(400)

    const filterBrands = (e) => {
        const filter = e.target.firstChild.textContent
        if (filteredBrands === filter) {
            setFilteredBrands('')
            return
        }
        setFilteredBrands(filter)
    }

    const masterFilter = () => {
        setSneakers(products
                        .slice()
                        .filter(item => item.category === category || item.category === 'Unisex')
                        .filter(item => item.brand === (filteredBrands ? filteredBrands : item.brand))
                        .filter(item => (item.salePrice || item.price) > min && (item.salePrice || item.price) < max)
                    )
    }

    const { classes } = useStyles();

    const priceFilter = (e) => {
        const [minVal, maxVal] = e
        setMin(minVal)
        setMax(maxVal)
    }

    useEffect(() => {
        masterFilter()
    }, [filteredBrands, min, max])

    return (
        <aside id='collection__sidebar'>
            <div className="sidebar__wrapper">
                <div className="sidebar__filter--wrapper" id="brands__filter">
                    <h1 className="filter__title">Merken</h1>
                    <form>
                        {
                            brands.sort().map(item => (
                                <div className="sidebar__filter--brand" onClick={filterBrands} id={filteredBrands === item ? 'filter-selected' : ''}>
                                    <span>{item}</span>
                                </div>
                            ))
                        }
                    </form>
                </div>
                <div className="sidebar__filter--wrapper" id="price__filter">
                    <h1 className="filter__title">Filter op Prijs</h1>
                    <RangeSlider onChange={priceFilter} labelAlwaysOn min={40} max={400} defaultValue={[40, 400]} classNames={classes} />
                </div>
            </div>
        </aside>
    );
}

export default CollectionSideBar;
