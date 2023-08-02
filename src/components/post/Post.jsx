import './post.css'

export default function Post() {
    return (
        <div className='post'>
            <div className='postLeft'>
                <img className='postImg' src='https://img.freepik.com/free-photo/elephant-with-feathers-its-head-is-shown_188544-9613.jpg?size=626&ext=jpg&ga=GA1.2.510253636.1690194160&semt=sph' alt='' />
                <div className="postInfo">
                    <div className="postCats">
                        <button className='postCat'>Like</button>
                        <button className='postCat'>Download</button>
                    </div>
                    <span className="postTitle">User Name</span>
                    <hr />
                    <span className='postDate'>1 hr ago</span>
                </div>
            </div>
            <div className='postSide'>
                <p className="postDes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse a iste nihil. Quo laboriosam quaerat, minus accusantium vitae molestias ab voluptatum earum consectetur? Sapiente, necessitatibus delectus architecto doloremque consequatur nisi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p className='postDec'>Price: Rs.100/-</p>
                <button className='postCat'>Buy</button>
            </div>
        </div>
    )
}
