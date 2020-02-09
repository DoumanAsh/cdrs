use std::net::IpAddr;
use std::sync::Arc;

use r2d2;

/// Generic pool connection that is able to return an
/// `r2r2::Pool` as well as an IP address of a node.
pub struct ConnectionPool<M: r2d2::ManageConnection> {
  pool: Arc<r2d2::Pool<M>>,
  addr: IpAddr,
}

impl<M: r2d2::ManageConnection> ConnectionPool<M> {
  pub fn new(pool: r2d2::Pool<M>, addr: IpAddr) -> Self {
    ConnectionPool {
      pool: Arc::new(pool),
      addr,
    }
  }

  /// Returns reference to underlying `r2d2::Poo`.
  pub fn get_pool(&self) -> Arc<r2d2::Pool<M>> {
    self.pool.clone()
  }

  /// Return an IP address.
  pub fn get_addr(&self) -> IpAddr {
    self.addr
  }
}
