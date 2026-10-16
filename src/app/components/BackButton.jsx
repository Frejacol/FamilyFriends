import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const BackButton = () => {
  return (
    <div className="bg-white p-2 rounded-full inline-block col-start-1 row-start-1 self-start justify-self-start m-3">
      <Link href="/">
        <IoIosArrowBack className=" w-5 h-5" />
      </Link>
    </div>
  );
};

export default BackButton;
