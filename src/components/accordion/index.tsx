import React, { useEffect, useState } from "react";

const Accordion = () => {
  const [activePanel, setActivePanel] = useState("");
  const [getExp, setExp] = useState<any>([]);
  const [totalExp, setTotalExp] = useState<any>(0);
  const toggleChange = (panelId: any) => {
    setActivePanel(panelId === activePanel ? "" : panelId);
  };
  useEffect(() => {
    setExp([
      {
        start_date: "2018-02-03",
        end_date: "2018-09-02",
      },
      {
        start_date: "2019-02-03",
        end_date: "2020-09-02",
      },
      {
        start_date: "2021-02-03",
        end_date: null,
      },
    ]);
  }, []);

  useEffect(() => {
    if (getExp?.length > 0) {
      const newExp: any = getExp?.map((e: any) => {
        const startDate = new Date(e.start_date);
        const endDate = e.end_date !== null ? new Date(e.end_date) : new Date();
        const monthsDifference =
          (endDate.getFullYear() - startDate.getFullYear()) * 12 +
          (endDate.getMonth() - startDate.getMonth());
        return {
          start_date: startDate.toISOString(),
          end_date: endDate.toISOString(),
          total_month: monthsDifference,
        };
      });
      const totalMonths = newExp?.reduce(
        (total: number, item: any) => total + item?.total_month,
        0
      );
      setTotalExp(Math.floor(totalMonths / 12));
    }
  }, [getExp]);

  return (
    <div className="mt-5 p-5">
      <div className="accordion-wrapper">
        <div className="accordion" id="content1">
          <div className="heading" onClick={() => toggleChange("content1")}>
            <h3>Main Content One</h3>
          </div>
          <div
            className={`content ${
              activePanel === "content1" ? "active" : "no-content "
            }`}
            id="content1"
          >
            <div className="inner-content">
              <p>
                Corrupti aut enim officia, consequuntur dicta corporis
                laboriosam necessitatibus sed ipsam praesentium vero tenetur
                voluptas consectetur?
              </p>
            </div>
          </div>
        </div>
        <div className="accordion" id="content2">
          <div className="heading" onClick={() => toggleChange("content2")}>
            <h3>Main Content Two</h3>
          </div>
          <div
            className={`content ${
              activePanel === "content2" ? "active" : "no-content"
            }`}
            id="content2"
          >
            <div className="inner-content">
              <p>
                Corrupti aut enim officia, consequuntur dicta corporis
                laboriosam necessitatibus sed ipsam praesentium vero tenetur
                voluptas consectetur?
              </p>
            </div>
          </div>
        </div>
        <div className="accordion" id="content3">
          <div className="heading" onClick={() => toggleChange("content3")}>
            <h3>Main Content Three</h3>
          </div>
          <div
            className={`content ${
              activePanel === "content3" ? "active" : "no-content "
            }`}
            id="content3"
          >
            <div className="inner-content">
              <p>
                Corrupti aut enim officia, consequuntur dicta corporis
                laboriosam necessitatibus sed ipsam praesentium vero tenetur
                voluptas consectetur?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="total-year-experience">
        Total:{totalExp > 5 ? `${totalExp}+` : totalExp}
      </div>
    </div>
  );
};

export default Accordion;
