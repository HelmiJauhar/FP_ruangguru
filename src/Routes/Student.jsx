import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Select,
  Text
} from '@chakra-ui/react'

const Student = () => {
  const [dataFetch, setDatafetch] = useState([]);
  //   const [isLoading, setLoading] = useState(false);
  //   const [refresh, setRefresh] = useState(false);
  const [dataFilter, setDataFilter] = useState("All");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    // setLoading(true);
    getData();
    // setLoading(false);
  }, []);

  const getData = async () => {
    const response = await fetch("http://localhost:3001/student");
    const datastudent = await response.json();
    setFiltered(datastudent);
    setDatafetch(datastudent);
  };

  const deleteData = async (id) => {
    await fetch("http://localhost:3001/student/" + id, {
      method: "DELETE",
    }).then(() => {
      console.log("Berhasil hapus student dengan id" + id);
      const updated = dataFetch.filter((el) => el.id !== id);
      setDatafetch(updated);
      setFiltered(updated);
      // setRefresh(!refresh);
    });
  };

  const handleFilter = () => {
    if (dataFilter === "All") {
      setFiltered(dataFetch);
    } else {
      const filteredData = dataFetch.filter((el) => el.faculty === dataFilter);
      setFiltered(filteredData);
    }
  };

  useEffect(() => {
    handleFilter();
  },[dataFilter]);

  return (
    <>
      {/* {isLoading && <p>Loading...</p>} */}
      {/* {isLoading && <p>Loading ...</p>}
      {!isLoading && ( */}
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <TableContainer ml={100} mr={100} mt={100}>
          <Select
            value={dataFilter}
            onChange={(e) => setDataFilter(e.target.value)}
            data-testid="filter"
            variant='flushed'
          >
            <option value="All">All</option>
            <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
            <option value="Fakultas Ilmu Sosial dan Politik">
              Fakultas Ilmu Sosial dan Politik
            </option>
            <option value="Fakultas Teknik">Fakultas Teknik</option>
            <option value="Fakultas Teknologi Informasi dan Sains">
              Fakultas Teknologi Informasi dan Sains
            </option>
          </Select>
            <Table variant='striped' colorScheme="teal" id="table-student">
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>Full Name</Th>
                  <Th>Faculty</Th>
                  <Th>Program Study</Th>
                  <Th>Option</Th>
                </Tr>
              </Thead>
              <Tbody>
              {filtered.length > 0 ? (
                filtered.map((el) => (
                  <Tr className="student-data-row" key={el.id}>
                    <Td>{el.id}</Td>
                    <Td>
                      <Link to={`/student/${el.id}`}>{el.fullname}</Link>
                    </Td>
                    <Td>{el.faculty}</Td>
                    <Td>{el.programStudy}</Td>
                    <Td>
                      <button
                        data-testid={"delete-" + el.id}
                        onClick={() => deleteData(el.id)}
                      >
                        Delete
                      </button>
                    </Td>
                  </Tr>
                ))
              ) : (
                // <p>Loading ...</p>
                <Text>Loading ...</Text>
              )}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
        <Footer />
      </div>
      {/* // )} */}
    </>
  );
};

export default Student;
