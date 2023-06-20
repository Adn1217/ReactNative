import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("locations.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS locations (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, coords TEXT NOT NULL)`,
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const insertLocation = (title, coords) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO locations (title, coords) VALUES (?,?)`,
        [title, JSON.stringify(coords)],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const selectLocations = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM locations`,
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};
