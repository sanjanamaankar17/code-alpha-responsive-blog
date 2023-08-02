import './write.css';

export default function Write() {
  return (
      <div className='write'>
          <img className='writeImg' src="https://img.freepik.com/free-photo/vintage-landscape-with-gondolas_1160-162.jpg?size=626&ext=jpg&ga=GA1.2.510253636.1690194160&semt=sph" alt="" />
          <form className='writeForm'>
              <div className="writeFormGroup">
                  <label htmlFor="fileInput">
                      <i className="writeIcon fa-solid fa-plus"></i>
                  </label>
                  <input type="file" id='fileInput' style={{display:"none"}} />
                  <input type="text" placeholder='Title' className='writeInput' autoFocus={true } />
              </div>
              <div className="writeFormGroup">
                  <textarea placeholder='Tell your story...' type='text' className='writeInput writeText'>
                  </textarea>
              </div>
              <button className="writeSubmit">Publish</button>
            </form>
      </div>
  )
}
