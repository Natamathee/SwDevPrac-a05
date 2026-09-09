import DateReserve from "@/components/DateReserve";

export default function BookingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-6 py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Venue Booking</h1>
      <form className="flex flex-col items-center gap-8 w-full max-w-md">
        <DateReserve />
        <button
          type="submit"
          name="Book Venue"
          className="mt-4 px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-200"
        >
          Book Venue
        </button>
      </form>
    </main>
  );
}
