import styles from './index.module.scss'
import ListItem from '../ListItem'
import { getStockInfo } from '../../lib/api/stocks'
import { useState } from 'react'
import presureCalculate from '../../lib/presureCalculate'
import { useRouter } from 'next/dist/client/router'
import { useDispatch , useSelector } from 'react-redux'
import { getStockInfoo } from '../../lib/redux/actions/actions'

const { listContainer} = styles

const CategoriesList = ({categories , ttlStocks}) => {
    return (
      <div className={listContainer}>
        {categories.map((item, index) => (
            <ListItem 
                item={item}
                key={index}
                stocks={ttlStocks}
            />
        ))}
      </div>
    )
}

export default CategoriesList