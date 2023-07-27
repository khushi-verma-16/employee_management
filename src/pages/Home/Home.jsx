import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'

const Home = () => {
  return (
    <>
      <Header />
      <p className='sub-heading'>Employee's Information</p>
      <div className='card-section'>
        <div className='card'>
          <div className='img-section'>
            <div className='img-container'>
              <img src='https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img' />
            </div>
          </div>
          <div className='user-info'>
            <p>Khushi Soni</p>
            <p>Frontend Developer</p>
            <p>vermmakhushi16@gmail.com</p>
          </div>
          <div className='buttons'>
            <button className='edit-btn'>Edit</button>
            <button className='delete-btn'>Delete</button>
          </div>
        </div>
        <div className='card'>
          <div className='img-section'>
            <div className='img-container'>
              <img src='https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img' />
            </div>
          </div>
          <div className='user-info'>
            <p>Khushi Soni</p>
            <p>Frontend Developer</p>
            <p>vermmakhushi16@gmail.com</p>
          </div>
          <div className='buttons'>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
        <div className='card'>
          <div className='img-section'>
            <div className='img-container'>
              <img src='https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img' />
            </div>
          </div>
          <div className='user-info'>
            <p>Khushi Soni</p>
            <p>Frontend Developer</p>
            <p>vermmakhushi16@gmail.com</p>
          </div>
          <div className='buttons'>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home