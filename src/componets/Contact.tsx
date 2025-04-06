const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-screen px-4 text-center">
      {/* Heading */}
      <p className="font-mono text-lightNavy text-sm uppercase tracking-wider">
        Contact Me
      </p>
      <h1 className="font-bold text-lightGary text-3xl md:text-5xl">
        Get In Touch
      </h1>

      {/* Description */}
      <p className="text-lightGary max-w-xl text-sm md:text-base">
        My inbox is always open. Whether you have a question or just want to say
        hello, I&apos;ll try my best to get back to you! Feel free to mail me
        about any relevant job updates.
      </p>

      {/* Button */}
      <button
        onClick={() => {
          window.open("mailto:chandannekya@gmail.com");
        }}
        className="border-2 border-lightNavy hover:bg-lightNavy/10 transition-all duration-300 font-mono px-6 py-2 rounded text-lightGary text-base cursor-pointer mt-2"
      >
        Mail Me
      </button>
    </div>
  );
};

export default Contact;
