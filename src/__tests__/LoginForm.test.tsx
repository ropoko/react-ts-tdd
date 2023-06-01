import { fireEvent, render } from "@testing-library/react";

import LoginForm, { Props } from "./../components/LoginForm";

const renderLoginForm = (props: Partial<Props> = {}) => {
    
  const defaultProps: Props = {
    onPasswordChange() {
      return;
    },
    onRememberChange() {
      return;
    },
    onUsernameChange() {
      return;
    },
    onSubmit() {
      return;
    },
    shouldRemember: true
  };

  return render(<LoginForm {...defaultProps} {...props} />);
}

describe("<LoginForm />", () => {
  test("should display a blank login form, with remember me checked by default", async () => {
      const { findByTestId } = renderLoginForm();
    
      const loginForm = await findByTestId("login-form");
    
      expect(loginForm).toHaveFormValues({
        username: "",
        password: "",
        remember: true
      });
    });

    test("should allow entering a username", async () => {
      const onUsernameChange = jest.fn();
      const { findByTestId } = renderLoginForm({ onUsernameChange });
      const username = await findByTestId("username");
    
      fireEvent.change(username, { target: { value: "test" } });
    
      expect(onUsernameChange).toHaveBeenCalledWith("test");
    });
    
    test("should allow entering a password", async () => {
      const onPasswordChange = jest.fn();
      const { findByTestId } = renderLoginForm({ onPasswordChange });
      const username = await findByTestId("password");
    
      fireEvent.change(username, { target: { value: "password" } });
    
      expect(onPasswordChange).toHaveBeenCalledWith("password");
    });
});
