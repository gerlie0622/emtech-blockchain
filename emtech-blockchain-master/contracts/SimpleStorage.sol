// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    // Existing single stored data
    bytes32 public storedData;

    function set(bytes32 x) public {
        storedData = x;
    }

    function get() public view returns (bytes32) {
        return storedData;
    }

    struct Record {
        string name;
        string userId;
        string hash;
        string userType; // Added userType
        string department; // Added department
        uint256 timeIn;
        uint256 timeOut;
    }

    Record[] public records;

    function addRecord(string memory name, string memory userId, string memory hash, string memory userType, string memory department) public {
        records.push(Record(name, userId, hash, userType, department, 0, 0)); // Initialize timeIn and timeOut to 0
    }

    function setTimeIn(uint index) public {
        require(index < records.length, "Invalid index");
        records[index].timeIn = block.timestamp;
    }

    function setTimeOut(uint index) public {
        require(index < records.length, "Invalid index");
        records[index].timeOut = block.timestamp;
    }

    function getRecord(uint index) public view returns (string memory, string memory, string memory, string memory, string memory, uint256, uint256) {
        Record storage record = records[index];
        return (record.name, record.userId, record.hash, record.userType, record.department, record.timeIn, record.timeOut);
    }

    function getRecordCount() public view returns (uint) {
        return records.length;
    }
}
