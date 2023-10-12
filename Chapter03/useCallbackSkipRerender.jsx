function TaxCalculation({ year, income }) {
  const handleSubmit = useCallback(
    (taxPayerDetails) => {
      post("/tax/" + year, {
        taxPayerDetails,
        income,
      });
    },
    [year, income]
  );

  return (
    <div>
      <TaxPayer onSubmit={handleSubmit} />
    </div>
  );
}
