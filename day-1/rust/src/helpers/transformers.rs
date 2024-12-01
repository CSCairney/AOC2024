use crate::constants::dev::DEV_MODE;
use crate::types::types::InputPair;

pub fn parse_data(data: &Option<String>) -> Option<Vec<InputPair>> {
    if let Some(data_str) = data {
        let parsed_data: Vec<InputPair> = data_str
            .trim()
            .lines()
            .filter_map(|line| {
                let parts: Vec<&str> = line.trim().split_whitespace().collect();
                if parts.len() == 2 {
                    Some(InputPair {
                        value_one: parts[0].parse().ok()?,
                        value_two: parts[1].parse().ok()?,
                    })
                } else {
                    None
                }
            })
            .collect();

        if DEV_MODE {
            println!("Parsed Data: {:?}", parsed_data);
        }

        if parsed_data.is_empty() {
            None
        } else {
            Some(parsed_data)
        }
    } else {
        None
    }
}
