import Container from "@/components/Container";
import macbook from "../../assets/images/macbook.jpg";

const AboutUsSection = () => {
  return (
    <div className="">

    <Container className="grid grid-cols-2 z-[100]">
      <div className="ms-[-80px] h-[80%]">
        <img src={macbook} alt="" />
      </div>
      <div>
        <div>
          <h1 className="text-6xl font-semibold mb-11 ms-4">Who we are </h1>
          <p>
            At <span>iRepair</span>, we love MacBooks as much as you do. That’s
            why we offer fast, reliable, and affordable repair services for all
            kinds of MacBooks. Whether you need a screen replacement, a battery
            upgrade, or a software fix, we have the skills and experience to get
            your MacBook back to its best. We serve both individuals and
            businesses in
            <span>Bangladesh</span>, and we guarantee your satisfaction. Don’t
            let a broken MacBook ruin your day. Contact iRepair today and let us
            take care of it.
          </p>
        </div>
        <div>
          <div>
            <h1>98%</h1>
            <p>Successful repairs</p>
          </div>
          <div>
            <h1>2k+</h1>
            <p>Successful repairs </p>
          </div>
        </div>
      </div>
    </Container>
    </div>
  );
};

export default AboutUsSection;
