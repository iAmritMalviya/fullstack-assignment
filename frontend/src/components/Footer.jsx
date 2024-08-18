export function Footer() {
  return (
    <>
      <div className="flex justify-between w-full bg-black p-20  text-white">
        <div className="flex w-8/12 justify-between">
          <div>
            <h1 className="text-xl font-bold">Abstract</h1>
            <p>Branches</p>
          </div>
          <div>
            <h1 className="text-xl font-bold">Resources</h1>
            <p>Blog</p>
            <p>Help Center</p>
            <p>Release Notes</p>
            <p>Status</p>
          </div>
          <div>
            <h1 className="text-xl font-bold">Community</h1>
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p>Facebook</p>
            <p>Dribble</p>
            <p>Podcast</p>
          </div>
          <div>
            <div>
              <h1 className="text-xl font-bold">Company</h1>
              <p>About Us</p>
              <p>Carrier</p>
              <p>Legal</p>
            </div>
            <div>
              <h1 className="text-xl mt-3 font-bold">Contact Us</h1>
              <p>info@abstract.com</p>
            
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <h1 className="text-xl font-bold">Logo</h1>
          <p> &#169; Copyright 2022</p>
          <p>Abstract Studio Design, Inc.</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </>
  );
}
