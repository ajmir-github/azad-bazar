import { AppIcon } from "@/components/Icons";

function SignInForm() {
  return (
    <form className="grid gap-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" className="input input-bordered" required />
        {/* <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label> */}
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Sign in</button>
      </div>
    </form>
  );
}
function SignUpForm() {
  return (
    <form className="grid gap-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Full Name</span>
        </label>
        <input type="text" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Bio</span>
        </label>
        <textarea className="textarea textarea-bordered"></textarea>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" className="input input-bordered" required />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Sign up</button>
      </div>
    </form>
  );
}

export default function RegisterRoute() {
  return (
    <div className="grid">
      <div className="flex justify-center my-8">
        <AppIcon size={128} className="text-primary" />
      </div>

      <div className="p-2 md:p-4">
        <div role="tablist" className="tabs tabs-lifted tabs-lg">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Sign In"
            checked
          />
          <div
            role="tabpanel"
            className="tab-content  border-base-300 rounded-box p-4 md:p-8"
          >
            <SignInForm />
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Sign Up"
          />
          <div
            role="tabpanel"
            className="tab-content  border-base-300 rounded-box p-4 md:p-8"
          >
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
}
