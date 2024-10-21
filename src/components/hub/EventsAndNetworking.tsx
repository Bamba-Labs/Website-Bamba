const data = [
  {
    img: "https://pt-br.learn.canva.com/wp-content/uploads/sites/9/2020/01/evento-corporativo-1.jpg",
    title: "Builders do Rio | The Graph, Arbitrum & Chainlink",
    describe:
      "Our space is the meeting point for builders and entrepreneurs who are shaping the future of cryptocurrencies and technology in Rio.",
    month: "Sep",
    day: "10",
  },
  {
    img: "https://pt-br.learn.canva.com/wp-content/uploads/sites/9/2020/01/evento-corporativo-1.jpg",
    title: "Builders do Rio | The Graph, Arbitrum & Chainlink",
    describe:
      "Our space is the meeting point for builders and entrepreneurs who are shaping the future of cryptocurrencies e tecnologia no Rio.",
    month: "Sep",
    day: "10",
  },
  {
    img: "https://pt-br.learn.canva.com/wp-content/uploads/sites/9/2020/01/evento-corporativo-1.jpg",
    title: "Builders do Rio | The Graph, Arbitrum & Chainlink",
    describe:
      "Our space is the meeting point for builders and entrepreneurs who are shaping the future of cryptocurrencies e tecnologia no Rio.",
    month: "Sep",
    day: "10",
  },
];

const EventsAndNetworking = () => {
  return (
    <div className="bg-rich-black w-full">
      <div className="max-w-7xl mx-auto w-full xl:px-0 py-20">
        <div className="flex flex-col gap-16 px-6 rounded-2xl md:text-left py-20">
          <div className="gap-4 flex flex-col justify-center text-center items-center">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-light-gray">About Bamba Hub</p>
              <h3 className="text-2xl font-semibold leading-8 text-[#F6F7F6]">
                Events and Networking
              </h3>
            </div>
            <p className="text-light-gray leading-6 w-full md:w-[800px] ">
              At Bamba Labs, we promote a constant schedule of events, meetups
              and workshops focused on the tech and Web3 ecosystem. In addition,
              we have flexible and modern spaces for those who want to hold
              their own event.
            </p>
          </div>

          <div
            className="overflow-x-auto flex justify-center items-center"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {data.map((event, index) => (
              <div
                key={index}
                className="bg-very-light-gray rounded-lg flex-shrink-0"
                style={{
                  minWidth: "280px",
                  maxWidth: "300px",
                  margin: "0 8px",
                }}
              >
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <div className="text-rich-black font-semibold text-sm">
                    {event.month} {event.day}
                  </div>
                  <p className="text-rich-black text-lg font-semibold">
                    {event.title}
                  </p>
                  <p className="text-rich-black text-sm">{event.describe}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-[193px] self-center bg-very-light-gray text-rich-black rounded-full h-[48px] flex justify-center items-center transition duration-300 ease-in-out hover:scale-105 cursor-pointer">
            <p>See More Events</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsAndNetworking;
