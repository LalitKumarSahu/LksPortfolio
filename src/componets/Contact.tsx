

const Contact = () => {
  return (
    <div className="flex flex-col  items-center justify-center gap-4 h-screen ">
      <p className="font-medium text-lightNavy text-sm">contact me</p>
      <h1 className="font-bold text-lightGary text-5xl">Get In Touch</h1>
      <p className="w-1/2 text-center text-lightGary">
        My inbox is always open. Whether you have a question or just want to say
        hello, I'll try my best to get back to you! Feel free to mail me about
        any relevant job updates.
      </p>
      <button
        onClick={() => {
          window.open("mailto:chandannekya@gmail.com");
        }}
        className="border-2 font-mono border-lightNavy hover:bg-lightNavy/5 p-2 px-4 text-lg text-lightGary  rounded"
      >
        Mail Me
      </button>
    </div>
  );
};

export default Contact;
