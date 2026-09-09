import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main>
      <Banner />
      <section className="flex flex-wrap justify-center gap-8 px-6 py-10">
        <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg" />
        <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg" />
        <Card venueName="The Grand Table" imgSrc="/img/grandtable.jpg" />
      </section>
    </main>
  );
}
