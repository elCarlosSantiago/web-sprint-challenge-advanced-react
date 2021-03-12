# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

As the name suggests, stateful components manage data in state, whereas functional components (in theory) do not. Nevertheless, with the implementation of hooks, functional components are capable of managing state.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
   ComponentWillMount is now deprecated but it is called right before the component mounts. The React team suggests using componentDidMount instead which is called right after the component mounts. Same logic applies to componentWillUpdate. It is called any time state or props in that component change.

3. Define stateful logic.
   Stateful logic refers to all non-visual code, business logic as it is called which is code which deals with logical operations like state management, event handlers, change, submit handlers. Usually this logic can be abstracted to a custom hook.

4. What are the three step of creating a successful test? What is done in each phase?
   Arrange, Act, Assert. In the arrange phase we are setting up the environment for the test, usually rendering the component(s) we want to test. In the act phase we simulate the user experience by making use of userEvents & presenting as many cases we can think a user might take while interacting with our software. In the assert phase, we are _asserting_ the proposals we made in the act phase, similar to presenting evidence in a court case, assertion gives us confidence in rounding out our tests.
