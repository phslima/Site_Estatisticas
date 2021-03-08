import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./style.css";

import api from "../../services/api";

const CardEstatistica = ({ selectSubject }) => {
  const [semesters, setSemesters] = useState([[]]);

  useEffect(() => {
    const loadData = async () => {
      await api.get("/viewSortedGrid").then((response) => {
        setSemesters(
          response.data.ecomp.map((semester) => {
            return semester.disciplinas;
          })
        );
      });
    };

    loadData();
  }, []);


  semesters.forEach((disci)=>{
          
    disci.sort((a,b)=>{
      if(a.nome==="Álgebra Linear"){
        a.nome="Algebra Linear"
      }
      const codigoA = a.nome.toUpperCase();
      const codigoB = b.nome.toUpperCase() ;
    
      let comparison = 0;
      if (codigoA > codigoB) {
        comparison = 1;
      } else if (codigoA < codigoB) {
        comparison = -1;
      }
      return comparison;
    })
  })

  const handleSubjectClick = (e) => {
    selectSubject(e.target.text, e.target.id);
  };

  return (
    <div>
      {semesters.map((semester, index) => {
        return (
          <Card key={index}>
            <div>
              <Card.Header>
                {index + 1 < 11 ? `${index + 1}º Período` : "Optativas"}
              </Card.Header>
              <ul className="list-group">
                {semester.map((subject, index2) => {
                  return (
                    <li key={index2} className="list-group-item py-1 border-0">
                      <div>
                        <span
                          onClick={handleSubjectClick}
                          id={subject.codigo}
                        >
                          {subject.nome}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default CardEstatistica;
