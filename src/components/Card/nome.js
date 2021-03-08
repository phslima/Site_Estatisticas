import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./style.css";

import api from "../../services/api";

const CardEstatistica = ({ selectSubject }) => {
  const [semesters, setSemesters] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      await api.get("/viewSortedGrid").then((response) => {
        let periodos = response.data.ecomp.map((periodo) => {
          return periodo;
        });

        let vetorVazio = [];

        periodos.forEach((periodo) => {
          periodo.disciplinas.forEach((materia) => {
            vetorVazio.push(materia);
          });
        });
        vetorVazio.sort((a, b) => {
          const nomeA = a.nome.toUpperCase();
          const nomeB = b.nome.toUpperCase();

          let comparison = 0;
          if (nomeA > nomeB) {
            comparison = 1;
          } else if (nomeA < nomeB) {
            comparison = -1;
          }
          return comparison;
        });
        setSemesters(vetorVazio);
      });
    };

    loadData();
  }, []);
  console.log(semesters);
  const handleSubjectClick = (e) => {
    selectSubject(e.target.text, e.target.id);
    //console.log(e);
  };

  return (
    <div>
      <Card>
        <div>
          <Card.Header>Nome</Card.Header>

          <ul className="list-group">
            {semesters.map((subject, index2) => {
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
    </div>
  );
};

export default CardEstatistica;
