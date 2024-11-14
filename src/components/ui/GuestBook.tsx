import React from 'react';

const GuestBook: React.FC = () => {
  return (
    <main>
      <section className="container text-center">
        <h3 className="text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-6xl lg:leading-snug xl:text-8xl 2xl:text-8xl 2xl:leading-normal">
          Guest Book
        </h3>
        <div className="mx-auto mt-24 max-w-4xl space-y-8">
          <h4 className="relative text-3xl uppercase before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-1/3 before:bg-dark/30 after:absolute after:right-0 after:top-1/2 after:h-[1px] after:w-1/3 after:bg-dark/30">
            Purna Shrestha
          </h4>
          <p className="text-xl text-dark/60 text-justify">
            The business at Aasra Hospitality is very professional and the staff
            is very friendly. I would recommend this hotel to anyone who is
            looking for a great place to stay. The rooms are very clean and the
            beds are very comfortable. The breakfast is very good and the staff
            is very friendly. I would recommend this hotel to anyone who is
            looking for a great place to stay. The rooms are very clean and the
            beds are very comfortable. The breakfast is very good and the staff
            is very friendly.
          </p>
        </div>
      </section>
    </main>
  );
};

export default GuestBook;
