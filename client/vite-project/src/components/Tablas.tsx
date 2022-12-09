import { Table } from "@mantine/core";


export function DataFrame() {
    <>
        <Table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Create at</th>
                    <th>Update Date</th>
                    <th>Name</th>
                    <th>Parent</th>
                    <th>Children</th>
                </tr>
            </thead>
            <tbody>
                {
                    location.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.createdAt}</td>
                            <td>{item.updatedAt}</td>
                            <td>{item.name}</td>
                            <td>{item.parent?.name}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    </>
}