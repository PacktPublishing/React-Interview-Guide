const container = {
  display: 'flex',
  flexFlow: 'column nowrap',
  backgroundColor: '#7e7dd6',
  padding: '2rem',
};

const mainContent = {
  display: 'flex',
  flexFlow: 'row nowrap',
  padding: '2rem 0',
};

export default function Home() {
  return (
    <>
      <div style={container}>
        <h1>Heading 1</h1>

        <h2>Heading 2</h2>

        <h3>Heading 3</h3>

        <h4>Heading 4</h4>

        <h5>Heading 5</h5>

        <section style={mainContent}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
            mi sit amet velit convallis tincidunt.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
            mi sit amet velit convallis tincidunt.
          </p>
        </section>
      </div>
    </>
  );
}
