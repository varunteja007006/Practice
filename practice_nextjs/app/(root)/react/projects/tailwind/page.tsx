import React from "react";

function TailwindPage() {
  return (
    <div className="px-6 space-y-5">
      <h1 className="text-2xl mb-3">Tailwind Demo</h1>
      <div className="red-box"></div>
      <div className=" custom-class">Hello</div>
      <article className="prose lg:prose-xl bg-white mt-3 p-3">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
      </article>
    </div>
  );
}

export default TailwindPage;