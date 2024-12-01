mod helpers;
mod types;
mod constants;

use helpers::{reader::read_file_data, transformers::parse_data, helpers::value_sort};

fn main() {
    let data = read_file_data("../data/input.txt");
    if let Some(parsed_data) = parse_data(&data) {
        let sorted_data = value_sort(&parsed_data);
        let mut answer = 0;

        for value in sorted_data {
            answer += (value.value_one - value.value_two).abs();
        }

        println!("Part One: {}", answer);
    }
}
