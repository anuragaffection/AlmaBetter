import React from 'react'

function AddBlog() {
  return (
    <>
      <div className="container">

        <div className="d-flex flex-column">

          <h1 className='text-center my-4'>Add New Blog </h1>

          <form className=" d-flex flex-column gap-4">

            <div className="form-group">
              <label htmlFor="exampleInputTitle">Title </label>
              <input type="text" className="form-control" id="exampleInputTitle" aria-describedby="textHelp" placeholder="Enter Title of Blogs " />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputDescription">Description </label>
              <div class="form-outline">
                <textarea class="form-control" id="exampleInputDescription" rows="6"></textarea>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputImageUrl">Image Url </label>
              <input type="ulr" className="form-control" id="exampleInputImageUrl" placeholder="Enter Image Url" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>

          </form>

        </div>

      </div>

    </>
  )
}

export default AddBlog