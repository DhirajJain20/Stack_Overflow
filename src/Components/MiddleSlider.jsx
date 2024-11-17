import React, { useState, useEffect } from "react";
import axios from "axios";

const MiddleSlider = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedButton, setSelectedButton] = useState("activity");

  const handleButtonClick = (buttonValue) => {
    setSelectedButton(buttonValue);
    console.log("Button clicked:", buttonValue);
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.stackexchange.com/2.3/questions`,
          {
            params: {
              order: "desc",
              sort: selectedButton,
              site: "stackoverflow",
            },
          }
        );
        setQuestions(response.data.items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [selectedButton]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex-grow bg-white p-6 mx-8 mt-16" style={{ maxWidth: "calc(100% - 14rem)" }}>
      <h2 className="text-2xl font-semibold mb-4">Top Questions</h2>

      <div className="flex space-x-4 mb-6 items-center">
        {[
          { id: "activity", label: "Interesting" },
          { id: "creation", label: "Bountied" },
          { id: "hot", label: "Hot" },
          { id: "week", label: "Week" },
          { id: "month", label: "Month" },
        ].map((button) => (
          <button
            key={button.id}
            onClick={() => handleButtonClick(button.id)}
            className={`px-4 py-2 rounded-full ${
              selectedButton === button.id
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {button.label}
          </button>
        ))}

        <button
          onClick={() => console.log("Ask Question clicked")}
          className="px-4 py-2 rounded-full bg-blue-500 text-white ml-auto"
        >
          Ask Question
        </button>
      </div>

      <div className="space-y-6">
        {questions.map((question) => (
          <div key={question.question_id} className="border-b pb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-blue-600 hover:underline">
                  <a
                    href={question.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {question.title}
                  </a>
                </h3>
                <div className="flex space-x-2 mt-2">
                  {question.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm bg-gray-200 text-gray-700 rounded-full px-6 py-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex space-x-6 mt-4 text-sm text-gray-600">
              <div className="flex">
                <img src="/triangle.svg" alt="" className="h-5 w-5 mr-2" />
                <span className="font-bold text-gray-800">
                  {question.score}
                </span>
              </div>
              <div className="flex">
                <img src="/message3.svg" alt="" className="h-5 w-5 mr-2" />
                <span className="font-bold text-gray-800">
                  {question.answer_count}
                </span>
              </div>
              <div className="flex">
                <img src="/eye.svg" alt="" className="h-5 w-5 mr-2" />
                <span className="font-bold text-gray-800">
                  {question.view_count}
                </span>
              </div>
              <div className="text-gray-500 text-sm">
                <span>
                  Asked at{" "}
                  {new Date(question.creation_date * 1000).toLocaleDateString()}{" "}
                  at{" "}
                  {new Date(question.creation_date * 1000).toLocaleTimeString()}
                </span>{" "}
                by{" "}
                <a
                  href={question.owner.link}
                  className="font-semibold text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {question.owner.display_name}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiddleSlider;