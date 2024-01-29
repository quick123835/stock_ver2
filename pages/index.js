import { getAllStocks, getStockInfo } from '../lib/api/stocks'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CategoriesList from '../components/CategoriesList'
import { getTotalStocks , getTtlCategories } from '../lib/redux/actions/actions'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [categories , setCategories] = useState({})
  // const inputValue = useSelector(state => state.SearchReducer)
  const dispatch = useDispatch()

  const getAllStocksAsync = async () => {
    try {
      const { data } = await getAllStocks()

      // 刪除基金及重複的
      const filterData = data.filter(item => item.industry_category !== 'ETF' && item.industry_category!=='Index' && item.industry_category!=='上櫃指數股票型基金(ETF)' && item.industry_category!=='ETN' && item.industry_category!=='指數投資證券(ETN)' && item.industry_category!=='受益證券')
      let uniqueArray = Array.from(new Map(filterData.map(item => [item.stock_id, item])).values())
      dispatch(getTotalStocks(uniqueArray))
      
      // 取出類別
      const categories = uniqueArray.reduce((accumulator, item) => {
        if (!accumulator.includes(item.industry_category)) {
          accumulator.push(item.industry_category);
        }
        return accumulator;
      }, []);
      dispatch(getTtlCategories(categories))
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getAllStocksAsync()
  }, [])

  // useEffect(() => {
  //   const newList = stocks.filter(stock => stock.stock_id.includes(inputValue))
  //   setRenderList(newList)
  // }, [inputValue])

  const ttlStocks = useSelector(state => state.getTtlStocksReducer)
  const ttlCategories = useSelector(state => state.getTtlCategoriesReducer)
  

  return (
    <div>
      {loading === true && (
        <div className='position-absolute w-100 h-100 d-flex justify-content-center align-items-center'>
          Loading...
        </div>
      )}
      { loading === false && (
        <CategoriesList 
          categories={ttlCategories}
          ttlStocks={ttlStocks}
        />
      )}
      
    </div>
  )
}

export default Home
