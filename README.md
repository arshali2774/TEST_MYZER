# My thought process for completing the project.

    - Immediately after reading the prompt for the test I knew that two components were needed.
    - One for the container and other the repeating element.
    - Container was the side bar and elements were the links(items).
    - With the use of useState I initialized the "sidebarData" state with an empty array.
    - With useEffect hook I fetched the API and set the data in "sidebarData" state.
    - After that I mapped over the state array to pass the data to "items" component using props.
    - When I first tried to enter the fontsAwsome icons there was an error no icons were showing. Actually i forgot to add the cdn script of fontAwesome to my html.
    - But still there were no icons so i read some docs on fontAwesome on how to add icons in React.
    - But still there were no icons and so i looked up the icons given in fontAwsome and i saw that normal icons which i was suppose to show were paid and hoverIcons which i was suppose to show on hover were free.
    - So, i thought that main objective of this test is to challenge me on how to add hover styling on elements in React.
    - So, i took the liberty to add my own hover effect.
    - Also the last icon was not found in fontAwsome. So, there is no icon in that place.
