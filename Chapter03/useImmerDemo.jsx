import { useImmer } from "use-immer";

function UserProfile() {
  const [user, setUser] = useImmer({
    name: "Tom",
    address: {
      country: "United States",
      city: "Austin",
      postalCode: 73301,
    },
  });

  function updatePostalCode(code) {
    setUser((draft) => {
      draft.address.postalCode = code;
    });
  }

  return (
    <div className="profile">
      <h1>
        Hello {user.name}, your latest postal code is ({user.address.postalCode}
        )
      </h1>
      <input
        onChange={(e) => {
          updatePostalCode(e.target.value);
        }}
        value={user.address.postalCode}
      />
    </div>
  );
}
