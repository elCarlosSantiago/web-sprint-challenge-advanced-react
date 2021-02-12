# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
The main difference between a stateful & a functional component is that stateful components can manage both props & state & thus keep track of changing data, whereas functional components are only
dependent on props. With hooks functional components now have access to state as well so the lines between class components & functional components are blurred now more than ever.

2. When does a componentWillMount function be called? What about a componentWillUpdate? (componentDidMount / componentDidUpdate?)
componentWillMount/componentDidMount will both be called towards the end of the 'mounting' phase of a component. ComponentWillMount is now deprecated due to its lack
of flexibility with async operations. Before they are called, the constructor function will be called, after, if the component is stateful, state will be derived and then it will call the render function. At this point React will update the DOM & then componentDidMount will fire. On the other hand, componentWillMount will be called right before the render function and thus will not have access to the DOM.

componentWillUpdate/componentDidUpdate come later in the components lifecycle. They are similar to WillMount/DidMount in the sense that their namesakes are called before and after the render function is called. They are dependent on props & state as well, however WillUpdate is based on NewProps & NewState whereas DidUpdate is based on previous props and previous state.

3. Define stateful logic.

It refers to any non-visual, logical code that deals with state such as, change & submit handlers, state hooks & related logic.

4. What are the three step of creating a successful test? What is done in each phase?
Triple A. The first step is Arrange, in this step we must set up initial app state such as rendering a component. Next we have Act, we're we take an action such as emulating user input or interactions with the DOM. Finally the Assert step where, as the name suggests make an assertion on the previous actions we have set up. The expect() function is an example of an assertion in tests. Sometimes, you can marry an act with an assertion by using a query method like GetBy... where the test will automatically fail if there is no match, this is an example of implicit assertions.
