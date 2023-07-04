import Image from "next/image";

const Paypen = () => {
  return (
    <div className="">
      <div className="relative h-[294px] w-full lg:h-[calc(100vh-88px)]">
        <Image
          alt="Paypen Case Study Image"
          src="/assets/paypen-case-study-1.svg"
          fill
          className="object-cover object-bottom"
        />
      </div>

      <section className=" mt-[118px] px-4">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row">
            <div className="flex flex-col">
              <span className="">Year</span>
              <span className="">2022</span>
            </div>
            <div className="flex flex-col">
              <span className="">Role</span>
              <span className="">UI design, Interaction design</span>
            </div>
            <div className="flex flex-col">
              <span className="">Website</span>
              <span className="">Live Website</span>
            </div>
          </div>
          <h1 className="mt-24 text-4xl font-medium">Overview</h1>
          <p className="text-2xl leading-9">
            PayPen is an application built to tackle the remittance and
            reconciliation issues currently faced in the Nigerian pension
            industry today. It ensures that all pension remittances made come
            with corresponding schedules to enable the relevant pension
            operators do the needful to credit the retirement savings accounts
            of the concerned Nigerian employees.
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-medium">Problem</h1>
          <p className="text-2xl leading-9">
            In Nigeria today, all Organizations with three or more employees
            must make pension remittances on behalf of their staff to give them
            a means of livelihood when they retire. However, there is a problem
            that has plagued the industry since inception which is
            reconciliation. <br /> <br /> Payments made should come with a list
            containing the names of the employees as well as their retirement
            savings account numbers to allow for easy processing. <br /> <br />
            But some employers do not comply with this instruction, they make
            payments without providing the schedule needed to process the
            payments, this makes the funds useless for the pension operators as
            well as the employees because the funds are not invested and there
            are no returns for all parties involved.
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-medium">Goal</h1>
          <p className="text-2xl leading-9">
            PayPen provides an electronic platform where Employers can make
            payments seamlessly while ensuring that a schedule is provided and
            transmitted to the pension operators for onward processing.
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-medium">Role</h1>
          <p className="text-2xl leading-9">
            Visual Design and Interaction: Designed the Wireframes, HiFidelity
            prototypes and System style guide.
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-medium">Sketches</h1>
          <p className="text-2xl leading-9">
            I used the user research and information architecture created my the
            product team to brainstorm and sketch down by ideas
          </p>
        </div>
        <div className="first-letter: mt-[80px] grid grid-cols-3 gap-1.5 lg:gap-5 ">
          <div className="relative w-full">
            <Image
              alt="Sketch images"
              src="/assets/sketch-1.svg"
              className="object"
              fill
            />
          </div>
          <div className="relative w-full">
            <Image alt="Sketch images" src="/assets/sketch-1.svg" fill />
          </div>
          <div className="relative w-full">
            <Image alt="Sketch images" src="/assets/sketch-1.svg" fill />
          </div>
          <div className="relative w-full">
            <Image alt="Sketch images" src="/assets/sketch-1.svg" fill />
          </div>
          <div className="relative w-full">
            <Image alt="Sketch images" src="/assets/sketch-1.svg" fill />
          </div>
          <div className="relative w-full">
            <Image alt="Sketch images" src="/assets/sketch-1.svg" fill />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Paypen;
