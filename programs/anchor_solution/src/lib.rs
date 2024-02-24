use anchor_lang::prelude::*;

declare_id!("5D7Quju6iQRJ5uAHjgrrCGnQnmxbWKHHhEQFQopBhpVo");

#[program]
pub mod anchor_solution {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
