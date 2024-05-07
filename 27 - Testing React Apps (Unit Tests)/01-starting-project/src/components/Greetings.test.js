import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders 'Hello World' as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //... nothing

    //Assert
    const element = screen.getByText("Hello World", { exact: false });
    expect(element).toBeInTheDocument();
  });

  test("renders 'it's good to see you' if button was NOT clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //... nothing

    //Assert
    const element = screen.getByText("Good to see you", { exact: false });
    expect(element).toBeInTheDocument();
  });

  test("renders 'CHANGED!' if button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("do not render 'its good to see you' when button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText("Good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
