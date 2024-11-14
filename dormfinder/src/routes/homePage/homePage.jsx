import { useContext } from 'react'
import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'
import { AuthContext } from '../../context/AuthContext'
import PopularPlaces from '../../components/popularPlaces/popularPlaces'

const HomePage = () => {

    const {currentUser} = useContext(AuthContext)

    

  return (
    <div className='homePage'>
        <div className="textContainer">
            <div className="wrapper">
                <h1 className='title'>Find your Perfect home away from HOME near your Second Home</h1>
                <p>
                Find a place that feels like home, right near your second home: school. Experience comfort, convenience, and a perfect fit for your lifestyle, so you can focus on what matters most.
                </p>
                <SearchBar />

                <div className='boxes'>
                    <div className='box'>
                        <h1>5</h1>
                        <h2>Girls only</h2>
                    </div>
                    <div className='box'>
                        <h1>5</h1>
                        <h2>Boys only</h2>
                    </div>
                    <div className='box'>
                        <h1>10</h1>
                        <h2>Boarding Houses</h2>
                    </div>
                </div>

                {/* <div className='popularBh'>
                    <PopularPlaces />
                </div> */}

            </div>
        </div>
        <div className="imgContainer">
            <img src="bg.png" alt="background image" />
        </div>
    </div>
  )
}

export default HomePage