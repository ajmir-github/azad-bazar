import { EditIcon, SendIcon } from "@/components/Icons";
import { Link } from "react-router-dom";

export default function UserMetaData() {
  return (
    <div className="p-2 md:p-4 grid gap-4 md:gap-8">
      <div className="m-5 flex justify-end">
        <button className="btn btn-circle">
          <EditIcon />
        </button>
      </div>
      <div className="gap-4 md:gap-4 flex flex-col items-center">
        <div className="avatar">
          <div className="w-72 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="prose-lg md:prose-xl grow text-center">
          <h2>Alixia Johanson</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            nemo laudantium at mollitia asperiores. Quod, voluptas suscipit
            eligendi quibusdam placeat tenetur quidem? Quasi repellat dolorum
            neque possimus repudiandae laborum rem!
          </p>
          <Link
            to={"mailto:j.alixia@gmail.com<"}
            className="btn btn-ghost w-full"
          >
            <SendIcon />
            j.alixia@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
}
