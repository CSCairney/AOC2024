use std::fs;

pub fn read_file_data(path: &str) -> Option<String> {
    fs::read_to_string(path).ok()
}