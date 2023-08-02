import './singlepost.css';

export default function Singlepost() {
  return (
      <div className='singlePost'>
          <div className="singlePostWrapper">
              <img src="https://img.freepik.com/free-photo/elephant-with-feathers-its-head-is-shown_188544-9613.jpg?size=626&ext=jpg&ga=GA1.2.510253636.1690194160&semt=sph" alt="" className="singlePostImg" />
          <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
              <div className="singlePostEdit">
                  <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                  <i className="singlePostIcon fa-solid fa-trash"></i>
              </div>
              </h1>
              <div className="singlePostInfo">
                  <span className='singlePostAuthor'>Author: <b>Sanjana</b></span>
                  <span className='singlePostDate'>1 hr ago</span>
              </div>
                  <p className="singlePostDes">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias distinctio praesentium molestiae culpa, esse delectus tempore. Facere magnam aliquid quasi inventore accusantium ea placeat porro illo laboriosam, enim, reprehenderit dolorem!
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias distinctio praesentium molestiae culpa, esse delectus tempore. Facere magnam aliquid quasi inventore accusantium ea placeat porro illo laboriosam, enim, reprehenderit dolorem!
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias distinctio praesentium molestiae culpa, esse delectus tempore. Facere magnam aliquid quasi inventore accusantium ea placeat porro illo laboriosam, enim, reprehenderit dolorem!
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias distinctio praesentium molestiae culpa, esse delectus tempore. Facere magnam aliquid quasi inventore accusantium ea placeat porro illo laboriosam, enim, reprehenderit dolorem!
                  </p>
          </div>
      </div>
  )
}
