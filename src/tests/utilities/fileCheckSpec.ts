import fileExists from "../../utilties/fileCheck";

describe("Validate existence of local files", () => {
  it("should return true if file is found", () => {
    expect(fileExists("./public/assets/thumb/manutd800x600.jpeg")).toBe(true);
  });

  it("should return false if file is not found", () => {
    expect(fileExists("./public/assets/thumb/nosuchfile800x600.jpeg")).toBe(
      false
    );
  });
});
