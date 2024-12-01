mod helpers;
mod types;
mod constants;

use helpers::{reader::read_file_data, transformers::parse_data, helpers::value_sort, helpers::count};

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

        let data = read_file_data("../data/input.txt");
        if let Some(parsed_data) = parse_data(&data) {
            let mut answer = 0;

            parsed_data.iter().for_each(|value| {
                if let Ok(count_value) = count(&parsed_data, value.value_one).try_into() as Result<i32, _> {
                    answer += value.value_one * count_value;
                }
            });

            println!("Part Two: {}", answer);
        }
}
